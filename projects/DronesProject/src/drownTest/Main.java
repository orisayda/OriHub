package drownTest;

public class Main {

	static int R=20;
	static int nWalls=6;
	
	static Area area;
	public static void main(String[] args){
		
		drone DRONE = new drone();
		for(int i=0;i<100;i++)
		{
			DRONE.MoveDrown();
			DRONE.v.PrintVector();
		}
	}
}
