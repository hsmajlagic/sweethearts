import { random } from 'lodash';
import constants from './constants.js'

// will calculate the result 'DOG' or 'CAT'
export default class Game {
  constructor(data) {
    this.data = data;
    this.catScore = 0;
    this.dogScore = 0;
  }

  // Shorter names give more points to DOG, longer names to CAT
  calculateNameScore(firstName) {
    let threshold = Math.min(firstName.length * 10, 100);
    this.dogScore += 100 - threshold;
    this.catScore += threshold;
  }

  // Ages corresponds more to CAT preference, meaning older folks will lean more to CATs (coeff. 2)
  calculateAgeScore(age) {
    this.dogScore += age
    this.catScore += age * 2;
  }

  // Females align to CATs, males to DOGS, unspecified is 50/50
  calculateGenderScore(gender) {
    if (gender === constants.FORM.GENDER.MALE) {
      this.dogScore += 75;
      this.catScore += 25;
    } else if (gender === constants.FORM.GENDER.FEMALE) {
      this.dogScore += 25;
      this.catScore += 75;
    } else {
      this.dogScore += 50;
      this.catScore += 50;
    }
  }

  // Ages corresponds more to CAT preference, meaning older folks will lean more to CATs (coeff. 2)
  calculateEyeScore(eyeColor) {
    if (eyeColor === 'blue') {
      this.dogScore += 80;
      this.catScore += 20;
    } else if (eyeColor === 'green') {
      this.dogScore += 60;
      this.catScore += 40;
    } else if (eyeColor === 'brown') {
      this.dogScore += 40;
      this.catScore += 60;
    } else if (eyeColor === 'black') {
      this.dogScore += 20;
      this.catScore += 80;
    }
  }

  calculatePlaceScore(place) {
    if (place === constants.FORM.PLACES.APARTMENT) {
      this.dogScore += 30;
      this.catScore += 70;
    } else if (place === constants.FORM.PLACES.HOUSE) {
      this.dogScore += 70;
      this.catScore += 30;
    }
  }

  calculatePersonalityScore(personality) {
    if (personality === constants.FORM.PERSONALITIES.INTROVERT) {
      this.dogScore += 30;
      this.catScore += 70;
    } else if (personality === constants.FORM.PERSONALITIES.INTROVERT) {
      this.dogScore += 70;
      this.catScore += 30;
    }
  }

  calculateResult() {
    this.data.firstName && this.calculateNameScore(this.data.firstName);
    this.data.gender && this.calculateGenderScore(this.data.gender);
    this.data.eyeColor && this.calculateEyeScore(this.data.eyeColor);
    this.data.age && this.calculateAgeScore(Number(this.data.age));
    this.data.place && this.calculatePlaceScore(this.data.place);
    this.data.personality && this.calculatePersonalityScore(this.data.personality);

    let dogProbability = (this.dogScore / (this.dogScore + this.catScore)) * 100;
    let catProbability = (this.catScore / (this.dogScore + this.catScore)) * 100;

    // score is not the final factor, a random generator is used based on the relative probabilities of the two scores
    // so if the score is for example 70/30 for DOG, the final result has a 70% chance of being a DOG
    if (dogProbability > catProbability) {
      return random(0, 100) <= dogProbability ? constants.ANIMAL.DOG : constants.ANIMAL.CAT;
    } else if (catProbability > dogProbability) {
      return random(0, 100) <= catProbability ? constants.ANIMAL.CAT : constants.ANIMAL.DOG;
    }
    return random(0, 1) === 0 ? constants.ANIMAL.DOG : constants.ANIMAL.CAT;
  }
}
