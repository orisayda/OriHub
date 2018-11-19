package drownTest;

public class moveDrawnTheard implements Runnable {

	drownProcess processDrown;
	MathVector cordinate;
	MathVector vflock;
	MathVector v;
	Area area;
	private boolean CanRun;
	
	moveDrawnTheard(MathVector cordinate1,MathVector vflock1,MathVector v1,Area area1,drownProcess drown,boolean run1)
	{
		processDrown = drown;
		cordinate=cordinate1;
		vflock=vflock1;
		v=v1;
		area=area1;
		CanRun=run1;
	}
	public MathVector vshill()
	{
		MathVector v1 = Area.center;
		v1.sub(cordinate);
		v1.normalize();
		v1.multVector(vflock);
		v1.sub(v);
		v1.scale(sFunc(cordinate, area));
		v1.scale(area.CShill);
		return v1;
	}
	public double sFunc(MathVector x,Area area)
	{
		double s = -1.0;
		for(int i=0;i<Main.nWalls;i++)
		{
		if(x.length()>=0 && x.length()<=area.Radios)
			s=0;
		else if(x.length() > (area.Radios+area.width))
			s=1;
		else 
		{
			s=Math.sin((Math.PI/area.width)*(x.length()-area.Radios)-Math.PI)+1.0;
		}
		}
		return s;
	}
	public void stopDrawn()
	{
		processDrown.run=false;
	}
	public void MoveDrown()
	{
		while(CanRun)
		{
		//MathVector v1 =new MathVector(rand.nextInt(3)-1.0,rand.nextInt(3)-1.0,rand.nextInt(3)-1.0);
		v=vshill();
		}
	}
	@Override
	public void run() {
		// TODO Auto-generated method stub
		while(processDrown.run)
		{
				System.out.println("Theard Number: " + processDrown.drownId + " is in cordinate: ");
		}
	}

}
