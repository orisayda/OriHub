package drownTest;

public class moveDrawnTheard implements Runnable {

	MathVector cordinate;
	MathVector vflock;
	MathVector v;
	Area area;
	
	moveDrawnTheard(MathVector cordinate1,MathVector vflock1,MathVector v1,Area area1)
	{
		cordinate=cordinate1;
		vflock=vflock1;
		v=v1;
		area=area1;
	}
	@Override
	public void run() {
		// TODO Auto-generated method stub
		
	}

}
