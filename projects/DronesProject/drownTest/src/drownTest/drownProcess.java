package drownTest;

import java.io.InputStream;
import java.io.OutputStream;
import java.util.Random;

public class drownProcess extends Process{

	protected int drownId;
	Random rand;
	MathVector cordinate;
	private double[] newCordinate;
	static int Radios;
	MathVector vflock;
	MathVector v;
	Area area;
	static boolean run;
	moveDrawnTheard DrawnTheard;
	public drownProcess()
	{
		// TODO Auto-generated constructor stub
				vflock = new MathVector(0.1,0.1,0.1);
				v = new MathVector(0.1,0.1,0.1);
				rand = new Random();
				cordinate = new MathVector(10000.0,10000.0,10000.0);
				//this.v=vflock;
				area = new Area(20,6,200);
				DrawnTheard = new moveDrawnTheard(cordinate, vflock, v, area, this, run);
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
	
}
