import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageKey = 'listaTareas';

  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  getTareas(): string[] {
    if (this.isLocalStorageAvailable()) {
      return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
    }
    return [];
  }

  agregarTarea(tarea: string) {
    if (this.isLocalStorageAvailable()) {
      const tareas = this.getTareas();
      tareas.push(tarea);
      localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
    }
  }

  eliminarTareas(index: number) {
    if (this.isLocalStorageAvailable()) {
      const tareas = this.getTareas();
      tareas.splice(index, 1);
      localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
    }
  }
}
