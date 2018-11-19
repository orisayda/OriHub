package drownTest;

import java.util.Random;

public  class Area {
	Random rand = new Random();
	public static MathVector center ;
	static int Radios;
	wall[] walls;
	static double CShill;
	static int width;
	public Area(int R,int nWalls,double Cshiell)
	{
		this.CShill = Cshiell;
		center = new MathVector(0.0,0.0,0.0);
		this.Radios=R;
		this.walls = new wall[nWalls];
		for(int i=0;i<nWalls;i++)
		{
			this.walls[i] = new wall(R*2,R*2);
		}
		
	}
}
