function basicTeenager(age) {
if (age >= 13 && age <=19) {
return 'You are a teenager!'}
}

function teenager(age) {
  if (age >= 13 && age <=19) {
    return 'You are a teenager!'
  }
  return 'You are not a teenager!'
}

function ageChecker(age) {

}

function ternaryTeenager(age) {
return (age >= 13 && age <= 19) ? 'You are a teenager' : 'You are not a teenager'
}

function switchAge(age) {
switch(age) {
  case (age >=13 && age <= 19):
  'You are a teenager!';
   break;
  case (age > 19):
  'You are a grownup';
  break;
 case (age < 13):
 'You are a kid';
 break;
 default:
 'You have an age'
}
}
