import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

interface ReliefItem {
  name: string;
  desc: string;
  icon: string;
  outOfStock?: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  reliefForm: FormGroup;
  reliefItems: ReliefItem[] = [
    { name: 'Food Pack', desc: 'Rice, canned goods, noodles', icon: 'fast-food-outline' },
    { name: 'Clean Water', desc: 'Drinking water, water containers', icon: 'water-outline' },
    { name: 'Shelter Kit', desc: 'Tarpaulin, rope, basic tools', icon: 'home-outline' },
    { name: 'Clothing', desc: 'Shirts, pants, blankets', icon: 'shirt-outline' },
    { name: 'Medical Kit', desc: 'First aid, basic medicines', icon: 'medkit-outline' },
    { name: 'Baby Supplies', desc: 'Formula, diapers, baby food', icon: 'baby-outline' },
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.reliefForm = this.fb.group({
      selected: [[]]
    });
  }

  get selectedItems(): ReliefItem[] {
    return this.reliefForm.value.selected;
  }

  isSelected(item: ReliefItem): boolean {
    return this.selectedItems.some(i => i.name === item.name);
  }

  toggleItem(item: ReliefItem) {
    if (item.outOfStock) return;
    const selected = [...this.selectedItems];
    const idx = selected.findIndex(i => i.name === item.name);
    if (idx > -1) {
      selected.splice(idx, 1);
    } else {
      selected.push(item);
    }
    this.reliefForm.patchValue({ selected });
  }

  generateQR() {
    this.router.navigate(['request-confirmed']);
  }
}