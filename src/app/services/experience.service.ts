import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private readonly COLLECTION_NAME = 'experiences';

  constructor(private firestore: AngularFirestore) {}

  // 1. READ (R): Get all experiences
  getExperiences(): Observable<Experience[]> {
    return this.firestore.collection<Experience>(this.COLLECTION_NAME, ref => ref.orderBy('startDate', 'desc'))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            // Include the Firestore document ID in the object for CRUD operations
            const data = a.payload.doc.data() as Experience;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  // 2. CREATE (C): Add a new experience
  addExperience(experience: Experience): Promise<void> {
    // Firestore assigns the document ID automatically with .add()
    return this.firestore.collection<Experience>(this.COLLECTION_NAME).add(experience)
      .then(() => { /* Success */ })
      .catch(error => { throw error; });
  }

  // 3. UPDATE (U): Update an existing experience
  updateExperience(id: string, experience: Partial<Experience>): Promise<void> {
    // Use the document ID to target the specific record
    return this.firestore.doc(`${this.COLLECTION_NAME}/${id}`).update(experience);
  }

  // 4. DELETE (D): Remove an experience
  deleteExperience(id: string): Promise<void> {
    return this.firestore.doc(`${this.COLLECTION_NAME}/${id}`).delete();
  }
}