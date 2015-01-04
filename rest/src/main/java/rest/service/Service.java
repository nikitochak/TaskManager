package rest.service;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Controls and maintains a list with tasks.
 * 
 * @author Nikolay ch
 */
@Path("/service")
public class Service {
	private static final String MAXIMUM_DEADLINE = "2050-12-31";

	@Inject
	private DataBase base;

	/**
	 * Adds a new task to the list with the tasks.
	 * 
	 * @param name
	 *            the name of the task
	 * @param date
	 *            the deadline of the task
	 * @param content
	 *            the content of the task
	 */
	@Path("/create")
	@POST
	@Consumes("application/json")
	public void getTheName(String params) {
		JSONObject object = new JSONObject(params);
		String date = "";
		try {
			date = object.getString("date");
		} catch (JSONException e) {
			date = MAXIMUM_DEADLINE.toString();
		}

		Task task = new Task(base.getList().size(), object.getString("name"),
				object.getString("content"), date);
		base.addTask(task);
	}

	/**
	 * Getter for the list with the tasks.
	 * 
	 * @return the sorted list with the tasks
	 */
	@Path("get")
	@GET
	@Produces("application/json")
	public String getTasks() {
		return base.getList().toString();
	}

	/**
	 * Sets a task to be finished.
	 * 
	 * @param id
	 *            the id of the task
	 */
	@Path("/finish/{id}")
	@POST
	public void changeTask(@PathParam("id") int id) {
		base.setFinished(id);
	}

	/**
	 * Removes a task from the list.
	 * 
	 * @param id
	 *            the id of the task
	 */
	@Path("/remove")
	@DELETE
	public void removeTask(@QueryParam("id") int id) {
		base.daleteTask(id);
	}

	/**
	 * Removes all finished tasks.
	 */
	@Path("/removefinished")
	@DELETE
	public void removeFinished() {
		base.deleteFinished();
	}

	/**
	 * Marks all the existing tasks as finished.
	 */
	@Path("/allfinished")
	@POST
	public void markAllAsFinished() {
		base.setAllFinished();
	}
}
