import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';

interface Task {
  id: number;
  name: string;
  completed: boolean;
  category: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  tasks = signal<Task[]>([
    { id: 1, name: 'صلاة الفجر', completed: false, category: 'الصلوات المفروضة' },
    { id: 2, name: 'صلاة الظهر', completed: false, category: 'الصلوات المفروضة' },
    { id: 3, name: 'صلاة العصر', completed: false, category: 'الصلوات المفروضة' },
    { id: 4, name: 'صلاة المغرب', completed: false, category: 'الصلوات المفروضة' },
    { id: 5, name: 'صلاة العشاء', completed: false, category: 'الصلوات المفروضة' },
    { id: 6, name: 'سنن الرواتب', completed: false, category: 'السنن' },
    { id: 7, name: 'أذكار الصباح', completed: false, category: 'الأذكار' },
    { id: 8, name: 'أذكار المساء', completed: false, category: 'الأذكار' },
    { id: 9, name: 'قراءة القرآن', completed: false, category: 'العبادات' },
  ]);

  progress = computed(() => {
    const completed = this.tasks().filter(t => t.completed).length;
    return Math.round((completed / this.tasks().length) * 100);
  });

  toggleTask(id: number) {
    this.tasks.update(tasks =>
      tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }
}
