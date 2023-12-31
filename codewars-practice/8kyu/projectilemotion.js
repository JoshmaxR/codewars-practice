// Task
// You must create a class, Projectile, which takes in 3 arguments when initialized:

// starting height (0 ≤ h0 < 200)
// starting velocity (0 < v0 < 200)
// angle of the projectile when it is released (0° < a < 90°, measured in degrees).
// All units for distance are feet, and units for time are seconds.

// Note: Some solutions were invalidated because I added tests for situations where the starting height is 0, in which case the equation for height would be in the form h(t) = -16.0t^2 + vt where v represents the initial vertical velocity.

// ℎ
// =
// −
// 16
// �
// 2
// +
// �
// �
// +
// ℎ
// 0
// h=−16t 
// 2
//  +vt+h 
// 0
// ​
 
// In the above equation, h represents the height of the projectile after t seconds; v represents the initial vertical velocity; and h0 represents the starting height.

// You need to write the following methods for the Projectile class. In Crystal, the arguments passed when the object is initialized will always be of the type Float64, and in Java/Scala/Kotlin/Dart/C#, they will be int/Ints.

// A height_eq, heightEq, or HeightEq method, which returns the equation for height of the projectile as a function of time. [takes in nothing, returns a String]
// A horiz_eq, horizEq, or HeightEq method, which returns the equation for the horizontal position of the projectile as a function of time. [takes in nothing, returns a String]
// A height or Height method, which takes in an argument t and calculates the height of the projectile in feet. [takes in a double, returns a double]
// A horiz or Horiz method, which also takes in an argument t and calculates the horizontal distance that the projectile has traveled. [takes in a double, returns a double]
// A landing or Landing method which returns the point at which the projectile lands on the ground, in the form [x, y, t]. (y should always be 0). [takes in nothing, returns an array of doubles]
// EVERYTHING, including values in the equations appearing as coefficients, must be rounded to THREE decimal places. However, if the value is whole, only show one decimal place (for example => -16 becomes -16.0, not -16.000). But ensure that you DO NOT use the three-decimal-place rounded values for calculations. Otherwise, you will find yourself getting answers CLOSE to the correct one but slightly off.

// You also need to define instance variables as needed. These will not be tested.

// Examples
// Projectile Motion ExampleThis example shows the initial vertical and horizontal velocity when a projectile is fired at 2 ft/s.

// p = new Projectile(5, 2, 45) //=> a projectile starting at 5 ft above the ground, traveling initially at 2 ft/s, and at an angle of 45 degrees with the horizontal (shown in the triangle above)
// p.heightEq() //=> "h(t) = -16.0t^2 + 1.414t + 5.0"
//   # 1.414 = 2sin(45°)
// p.horizEq() //=> "x(t) = 1.414t"
//   # 1.414 = 2cos(45°)
// p.height(0.2) //=> 4.643 (Calculation: -16(0.2)^2 + (2sin(45°))(0.2) + 5)
// p.horiz(0.2) //=> 0.283 (Calculation: 2cos(45°) * 0.2)
// p.landing() //=> [0.856, 0, 0.605] (After 0.605 seconds (t = 0.605), the particle has landed on the ground (y = 0), and is 0.856 ft horizontally (x = 0.856) away from the release point.)
// Additionally, note that all coefficients are to be expressed as floats in the string equations, regardless of whether or not they are whole. This means that whole numbers should always be formatted with a ".0" appended.

// My solution

const fix = v => v.toFixed(3).replace(/0?0$/,'');
class Projectile {
    constructor(h,v,a) { Object.assign(this,{ h, v: v*Math.sin(a*=Math.PI/180), a: v*Math.cos(a) }); }
    heightEq() { return 'h(t) = -16.0t^2 + '+fix(this.v)+'t'+(this.h ? ' + '+fix(this.h) : ''); }
    horizEq() { return 'x(t) = '+fix(this.a)+(this.a ? 't' : ''); }
    height(t) { return +fix(this.h-16*t*t+this.v*t); }
    horiz(t) { return +fix(this.a*t); }
    landing(t) { return [this.horiz(t = (Math.sqrt(this.v*this.v+64*this.h)+this.v)/32),0,+fix(t)]; }
}