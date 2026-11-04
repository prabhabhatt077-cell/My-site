import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PROFILE_INFO,
  QUALIFICATIONS,
  SKILL_CATEGORIES,
  FOCUS_PILLARS,
  PRABHA_QUOTES,
  formatNepalPhoneNumber,
  buildMailtoUrl,
  getInternshipReadinessScore
} from './portfolioData.ts';

test('PROFILE_INFO has valid name and contact info matching brief', () => {
  assert.equal(PROFILE_INFO.name, 'PRABHA BHATT');
  assert.equal(PROFILE_INFO.phone, '9812345678');
  assert.equal(PROFILE_INFO.email, 'Prabhabhatt077@gmail.com');
  assert.equal(PROFILE_INFO.address, 'Mahendranagar, Kanchanpur, Nepal');
  assert.ok(PROFILE_INFO.careerObjective.includes('first-semester BBA student'));
  assert.ok(PROFILE_INFO.careerObjective.includes('internship opportunity in a reputable bank'));
});

test('QUALIFICATIONS contains Far Western University, Aadarsh Vidya Niketan, and Purna Secondary School', () => {
  assert.equal(QUALIFICATIONS.length, 3);
  const institutions = QUALIFICATIONS.map(q => q.institution);
  assert.ok(institutions.includes('Far Western University'));
  assert.ok(institutions.includes('Aadarsh Vidya Niketan'));
  assert.ok(institutions.includes('Purna Secondary School'));

  const bba = QUALIFICATIONS.find(q => q.id === 'bba');
  assert.ok(bba?.timeline.includes('2030'));
  assert.equal(bba?.status, 'ongoing');

  const plus2 = QUALIFICATIONS.find(q => q.id === 'plus2');
  assert.ok(plus2?.timeline.includes('2082'));
});

test('SKILL_CATEGORIES verifies PDICA, Leadership, Time Management, and Languages', () => {
  const allSkillNames = SKILL_CATEGORIES.flatMap(c => c.skills.map(s => s.name));
  assert.ok(allSkillNames.some(s => s.includes('PDICA')));
  assert.ok(allSkillNames.includes('Leadership'));
  assert.ok(allSkillNames.includes('Time Management'));
  assert.ok(allSkillNames.includes('Willingness to Learn'));
  assert.ok(allSkillNames.includes('Nepali'));
});

test('FOCUS_PILLARS has 4 distinct pillars for editorial presentation', () => {
  assert.equal(FOCUS_PILLARS.length, 4);
  assert.equal(FOCUS_PILLARS[0].number, '01');
  assert.equal(FOCUS_PILLARS[3].number, '04');
});

test('PRABHA_QUOTES contains quotes for writing hobby showcase', () => {
  assert.ok(PRABHA_QUOTES.length >= 4);
  assert.ok(PRABHA_QUOTES[0].quote.length > 20);
});

test('formatNepalPhoneNumber formats 10-digit phone with country code', () => {
  const formatted = formatNepalPhoneNumber('9812345678');
  assert.equal(formatted, '+977 9812 345 678');
});

test('buildMailtoUrl encodes subject and body safely', () => {
  const url = buildMailtoUrl('test@example.com', 'Interview Offer', 'Hello Prabha!');
  assert.ok(url.startsWith('mailto:test@example.com?subject=Interview%20Offer&body=Hello%20Prabha!'));
});

test('getInternshipReadinessScore returns expected readiness state', () => {
  const res = getInternshipReadinessScore();
  assert.equal(res.score, 100);
  assert.equal(res.label, 'Internship Ready');
});
