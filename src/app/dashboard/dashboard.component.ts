import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit, OnDestroy {
  data: string[] = [];

  isChecked: boolean = false;

  private subscription!: Subscription;

  userEmail: string = '';

  constructor(private service: ServiceService) {
    service.apitasks;
  }

  ngOnInit(): void {
    this.subscription = this.service.oberEmail$.subscribe((data1) => {
      this.userEmail = data1;
    });

    // this.service.getTaskByEmail(this.userEmail).pipe(
    //   map(d => d.)
    // )
    this.service
      .getTaskByEmail(this.userEmail)
      .pipe(map((d) => d.map((r) => r.task)))
      .subscribe((result) => {
        const filterArray = result.filter((item) => item.trim() !== '');
        console.log(result);
        this.data = filterArray;
      });
  }

  deleteItem(index: number) {
    this.data.splice(index, 1); // Remove item from array
  }

  markAsComplete(index: number) {
    // this.tasks[index].completed = true; // Mark as completed
    setTimeout(() => {
      this.data.splice(index, 1); // Remove after delay
    }, 1000); // Optional delay for effect
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
