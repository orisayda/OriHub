package drownTest;


import java.lang.Math;
import java.text.NumberFormat;

public class MathVector {

  private double dX;
  private double dY;
  private double dZ;
  
  // Constructor methods ....

  public MathVector() {
     dX = dY = dZ = 0.0;
  }

  public MathVector( double dX, double dY ,double dZ ) {
     this.dX = dX;
     this.dY = dY;
     this.dZ = dZ;
  }

  
   public void PrintVector()
   {
	   System.out.format("%f%n", dX);
	   System.out.format("%f%n", dY);
	   System.out.format("%f%n", dZ);
   }
// Convert MathVector to a string ...
  public String toString() {
     return "MathVector(" + dX + ", " + dY + ", " + dZ + ")";
  }

  // Compute magnitude of MathVector ....

  public double length() {
     return Math.sqrt ( dX*dX + dY*dY + dZ*dZ);
  }

  // Sum of two MathVectors ....

  public MathVector add( MathVector v1 ) {
	  MathVector v2 = new MathVector( this.dX + v1.dX, this.dY + v1.dY, this.dZ + v1.dZ );
	  this.dX = this.dX + v1.dX;
	  this.dY = this.dY + v1.dY;
	  this.dZ = this.dZ + v1.dZ;
      return v2;
  }

  // Subtract MathVector v1 from v .....

  public MathVector sub( MathVector v1 ) {
      MathVector v2 = new MathVector( this.dX - v1.dX, this.dY - v1.dY, this.dZ - v1.dZ );
      this.dX = this.dX - v1.dX;
      this.dY = this.dY - v1.dY;
      this.dZ = this.dZ - v1.dZ;
      return v2;
  }

  // Scale MathVector by a constant ...

  public MathVector scale( double scaleFactor ) {
      MathVector v2 = new MathVector( this.dX*scaleFactor, this.dY*scaleFactor, this.dZ*scaleFactor );
      this.dX = this.dX*scaleFactor;
	  this.dY = this.dY*scaleFactor;
	  this.dZ = this.dZ*scaleFactor;
      return v2;
  }

  // Normalize a MathVectors length....

  public MathVector normalize() {
     MathVector v2 = new MathVector();

     double length = Math.sqrt( this.dX*this.dX + this.dY*this.dY + this.dZ*this.dZ);
     if (length != 0) {
       v2.dX = this.dX/length;
       v2.dY = this.dY/length;
       v2.dZ = this.dZ/length;
     }
     this.dX = v2.dX;
     this.dY = v2.dY;
     this.dZ = v2.dZ;
     return v2;
  }   

  // Dot product of two MathVectors .....

  public double dotProduct ( MathVector v1 ) {
       return this.dX*v1.dX + this.dY*v1.dY + this.dZ*v1.dZ;
  }

  public MathVector multVector(MathVector v1)
  {
	  MathVector v2 = new MathVector(this.dY*v1.dZ-this.dZ*v1.dY,this.dZ*v1.dX-this.dX*v1.dZ,this.dX*v1.dY-this.dY*v1.dX);
	  this.dX=this.dY*v1.dZ-this.dZ*v1.dY;
	  this.dY=this.dZ*v1.dX-this.dX*v1.dZ;
	  this.dZ=this.dX*v1.dY-this.dY*v1.dX;
	  return v2;
  }
  // Exercise methods in MathVector class

  /*public static void main ( String args[] ) {
     MathVector vA = new MathVector( 1.0, 2.0, 1.0);
     MathVector vB = new MathVector( 2.0, 2.0, 1.0);
     
     System.out.println( "MathVector vA =" + vA.toString() );
     System.out.println( "MathVector vB =" + vB.toString() );

     System.out.println( "MathVector vA-vB =" + vA.sub(vB).toString() );
     System.out.println( "MathVector vB-vA =" + vB.sub(vA).toString() );

     System.out.println( "vA.normalize() =" + vA.normalize().toString() );
     System.out.println( "vB.normalize() =" + vB.normalize().toString() );

     System.out.println( "Dot product vA.vB =" + vA.dotProduct(vB) );
     System.out.println( "Dot product vB.vA =" + vB.dotProduct(vA) );
  }*/
}