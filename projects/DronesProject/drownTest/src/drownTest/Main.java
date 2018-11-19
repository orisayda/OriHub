package drownTest;

public class Main {

	static int R=20;
	static int nWalls=6;
	
	static Area area;
	public static void main(String[] args){
		
		drownProcess DRONE = new drownProcess();
		DRONE.drownId=1;
		new Thread(DRONE.DrawnTheard).start();
		drownProcess DRONE1 = new drownProcess();
		DRONE1.drownId=2;
		new Thread(DRONE1.DrawnTheard).start();
		DRONE.run=true;
		for(int i=0;i<100000;i++);
		DRONE.run=false;
	}
}
