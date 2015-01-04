package rest.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.BeforeClass;
import org.junit.Test;

/**
 * Tests the DataBase class.
 * 
 * @author Nikolay Ch
 */
public class DataBaseTest {

	private static DataBase base;

	/**
	 * Initializes the DataBase.
	 */
	@BeforeClass
	public static void init() {
		base = new DataBase();
	}

	/**
	 * Tests the DataBase method that adds a new Task.
	 */
	@Test
	public void testAddTask() {
		base.addTask(new Task(base.getList().size(), "name", "date", "asdf"));
		assertEquals(base.getList().size(), 1);
	}

	/**
	 * Tests the getter method of the DataBase.
	 */
	@Test
	public void testGetTask() {
		assertFalse(base.getTask(0).equals(null));
	}

	/**
	 * Tests the setFinished method of the DataBase.
	 */
	@Test
	public void testSetFinished() {
		base.setFinished(0);
		assertTrue(base.getTask(0).isFinished());
	}

	/**
	 * Deletes an element from the base and checks its size.
	 */
	@Test
	public void testDeleteTask() {
		base.daleteTask(0);
		assertEquals(base.getList().size(), 0);
	}

}
