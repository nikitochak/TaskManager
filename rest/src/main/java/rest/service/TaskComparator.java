package rest.service;

import java.util.Comparator;

/**
 * Comparator for the tasks.
 * 
 * @author Nikolay Ch
 */
class TaskComparator implements Comparator<Task> {

	public int compare(Task m1, Task m2) {
		return m1.getDeadline().compareTo(m2.getDeadline());
	}
}