package rest.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;

/**
 * Contains a list with task and provides methods for maintenance.
 * 
 * @author Nikolay Ch
 */
@ApplicationScoped
public class DataBase {
	private List<Task> listWithTasks;
	private static final TaskComparator COMPARATOR = new TaskComparator();

	/**
	 * Initializes the map with the data.
	 */
	@PostConstruct
	void init() {
		listWithTasks = new ArrayList<Task>();
	}

	public DataBase() {
		listWithTasks = new ArrayList<Task>();
	}

	/**
	 * Adds a new task.
	 * 
	 * @param task
	 *            the new task that must be added to the list
	 */
	public void addTask(Task task) {
		listWithTasks.add(task);
	}

	/**
	 * Getter for a task by its id.
	 * 
	 * @param id
	 *            the id of the task
	 * @return the task
	 */
	public Task getTask(int id) {
		return listWithTasks.get(id);
	}

	/**
	 * Marks a task as finished.
	 * 
	 * @param id
	 *            the id of the task
	 */
	public void setFinished(int id) {
		listWithTasks.get(id).setFinished();
	}

	/**
	 * Removes a task by its id.
	 * 
	 * @param id
	 *            the id of the task
	 */
	public void daleteTask(int id) {
		listWithTasks.remove(id);
		for (int i = 0; i < listWithTasks.size(); i++) {
			listWithTasks.get(i).setId(i);
		}
	}

	/**
	 * Sorts the list with the task by their deadlines.
	 * 
	 * @return the sorted list
	 */
	public List<Task> getList() {

		Collections.sort(listWithTasks, COMPARATOR);

		for (int i = 0; i < listWithTasks.size(); i++) {
			listWithTasks.get(i).setId(i);
		}

		return listWithTasks;
	}

	/**
	 * Deletes all finished tasks.
	 */
	public void deleteFinished() {

		for (int i = 0; i < listWithTasks.size(); i++) {
			if (listWithTasks.get(i).isFinished())
				listWithTasks.remove(i);
		}
	}

	/**
	 * Marks all tasks as finished.
	 */
	public void setAllFinished() {
		for (int i = 0; i < listWithTasks.size(); i++) {
			listWithTasks.get(i).setFinished();
		}
	}
}
