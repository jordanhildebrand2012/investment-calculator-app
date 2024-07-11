import { Component, input, Input } from '@angular/core';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentResult } from '../investment-result.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  investmentAnnualResult = input<InvestmentResult[]>();
}
