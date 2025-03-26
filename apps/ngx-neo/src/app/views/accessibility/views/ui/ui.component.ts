import { Component } from '@angular/core';
import {
  CheckboxStandaloneComponent,
  InputStandaloneComponent,
} from 'ngx-neo-ui';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { FArticleItemComponent } from '../../components/f-article-item/f-article-item.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'neo-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  standalone: true,
  imports: [
    InputStandaloneComponent,
    CheckboxStandaloneComponent,
    ReactiveFormsModule,
    FArticleItemComponent,
    NgForOf,
  ],
})
export class UiComponent {
  public form = new UntypedFormGroup({
    name: new UntypedFormControl(),
    family: new UntypedFormControl(),
    surname: new UntypedFormControl(),
    snils: new UntypedFormControl(),
    checkbox1: new UntypedFormControl(),
    checkbox2: new UntypedFormControl(),
    checkbox3: new UntypedFormControl(),
  });
  public news = [
    {
      title:
        '«Арт резонирует с болевыми точками человечества»: Анастасия Постригай — о взгляде художников на социальные проблемы',
      uri: 'https://www.buro247.ru/',
      image:
        'https://www.buro247.ru/thumb/300x300_5/images/Sasha-06-23/600-20-jun-2023-modern-art-social-problems.png',
      topics: [
        {
          value: 'Культура',
          uri: 'https://www.buro247.ru/culture',
        },
        {
          value: 'Искуство',
          uri: 'https://www.buro247.ru/culture/arts',
        },
      ],
    },
    {
      title:
        'Что покупать на летней распродаже? Выбор админов телеграм-каналов',
      uri: 'https://www.buro247.ru/',
      image:
        'https://www.buro247.ru/thumb/205x205_5/images/Sasha007/600-4-jul-2023-summer-sale-telegram-channels.png',
      topics: [
        {
          value: 'Мода',
          uri: 'https://www.buro247.ru/fashion',
        },
        {
          value: 'Вещи',
          uri: 'https://www.buro247.ru/fashion/things',
        },
      ],
    },
  ];
}
