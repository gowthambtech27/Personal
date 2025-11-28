import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  experiences$!: Observable<Experience[]>;
  experienceForm!: FormGroup;
  isEditMode: boolean = false;
  currentExperienceId: string | null = null;
  statusMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private experienceService: ExperienceService
  ) {}

  ngOnInit(): void {
    // Load existing data
    this.experiences$ = this.experienceService.getExperiences();
    
    // Initialize the form
    this.initForm();
  }

  // Helper getter for easy access to the description FormArray
  get descriptions(): FormArray {
    return this.experienceForm.get('description') as FormArray;
  }

  private initForm(): void {
    this.experienceForm = this.fb.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
      location: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['Present'], // Default to 'Present'
      description: this.fb.array([this.createDescriptionItem()], Validators.required)
    });
  }

  private createDescriptionItem(): FormControl {
    return this.fb.control('', Validators.required);
  }

  // Add a new bullet point field
  addDescriptionItem(): void {
    this.descriptions.push(this.createDescriptionItem());
  }

  // Remove a bullet point field
  removeDescriptionItem(index: number): void {
    this.descriptions.removeAt(index);
  }

  // --- CRUD Actions ---

  // Load existing data into the form for editing
  editExperience(experience: Experience): void {
    this.isEditMode = true;
    this.currentExperienceId = experience.id || null;
    
    // Patch the form with data, handling the description array
    this.experienceForm.patchValue({
      title: experience.title,
      company: experience.company,
      location: experience.location,
      startDate: experience.startDate,
      endDate: experience.endDate,
    });
    
    // Rebuild the FormArray for descriptions
    this.descriptions.clear();
    experience.description.forEach(desc => {
      this.descriptions.push(this.fb.control(desc, Validators.required));
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Handle form submission (Create or Update)
  onSubmit(): void {
    if (this.experienceForm.invalid) {
      this.statusMessage = 'Please fill out all required fields.';
      return;
    }
    
    const experienceData: Experience = this.experienceForm.value;

    if (this.isEditMode && this.currentExperienceId) {
      // Update existing
      this.experienceService.updateExperience(this.currentExperienceId, experienceData)
        .then(() => this.resetForm('Experience updated successfully!'))
        .catch(err => this.statusMessage = `Update failed: ${err.message}`);
    } else {
      // Create new
      this.experienceService.addExperience(experienceData)
        .then(() => this.resetForm('Experience created successfully!'))
        .catch(err => this.statusMessage = `Creation failed: ${err.message}`);
    }
  }

  // Delete an experience
  deleteExperience(id: string | undefined): void {
    if (!id || !confirm('Are you sure you want to delete this experience?')) {
      return;
    }

    this.experienceService.deleteExperience(id)
      .then(() => this.statusMessage = 'Experience deleted successfully.')
      .catch(err => this.statusMessage = `Deletion failed: ${err.message}`);
  }

  // Reset the form and exit edit mode
  resetForm(message: string | null = null): void {
    this.isEditMode = false;
    this.currentExperienceId = null;
    this.experienceForm.reset({ endDate: 'Present' });
    this.descriptions.clear();
    this.descriptions.push(this.createDescriptionItem()); // Ensure one description field remains
    this.statusMessage = message;
  }
}