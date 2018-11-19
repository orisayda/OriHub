package drownTest;
import java.util.*;

import javax.swing.plaf.basic.BasicInternalFrameTitlePane.MoveAction;

public class drone {
	Random rand;
	MathVector cordinate;
	private double[] newCordinate;
	static int Radios;
	MathVector vflock;
	MathVector v;
	Area area;
	public drone() {
		// TODO Auto-generated constructor stub
		vflock = new MathVector(0.1,0.1,0.1);
		v = new MathVector(0.1,0.1,0.1);
		rand = new Random();
		cordinate = new MathVector(10000.0,10000.0,10000.0);
		//this.v=vflock;
		area = new Area(20,6,200);
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
	public void MoveDrown()
	{
		//MathVector v1 =new MathVector(rand.nextInt(3)-1.0,rand.nextInt(3)-1.0,rand.nextInt(3)-1.0);
		v=vshill();
	}
	
}
