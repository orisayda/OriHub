package drownTest;

import java.io.InputStream;
import java.io.OutputStream;
import java.util.Random;

public class drownProcess extends Process{

	Random rand;
	MathVector cordinate;
	private double[] newCordinate;
	static int Radios;
	MathVector vflock;
	MathVector v;
	Area area;
	private boolean run;
	public drownProcess()
	{
		// TODO Auto-generated constructor stub
				vflock = new MathVector(0.1,0.1,0.1);
				v = new MathVector(0.1,0.1,0.1);
				rand = new Random();
				cordinate = new MathVector(10000.0,10000.0,10000.0);
				//this.v=vflock;
				area = new Area(20,6,200);
				run=true;
	}
	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public int exitValue() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public InputStream getErrorStream() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public InputStream getInputStream() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public OutputStream getOutputStream() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int waitFor() throws InterruptedException {
		// TODO Auto-generated method stub
		return 0;
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
		run=false;
	}
	public void MoveDrown()
	{
		while(run)
		{
		//MathVector v1 =new MathVector(rand.nextInt(3)-1.0,rand.nextInt(3)-1.0,rand.nextInt(3)-1.0);
		v=vshill();
		}
	}
}
