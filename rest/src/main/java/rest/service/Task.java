package rest.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.xml.bind.annotation.XmlElement;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Represents a task which contains deadline.
 * 
 * @author Nikolay Ch
 */
public class Task {

	private static final String MAXIMUM_DEADLINE = "2050-12-31";

	@XmlElement(name = "id")
	private int id;
	@XmlElement(name = "name")
	private String name;
	@XmlElement(name = "content")
	private String content;
	@XmlElement(name = "deadline")
	private Date deadline;
	@XmlElement(name = "isFinished")
	private boolean isFinished;

	public Task(int id, String name, String content, String deadline2) {
		this.id = id;
		this.name = name;
		this.content = content;
		try {
			deadline = new SimpleDateFormat("yyyy-MM-dd").parse(deadline2);
		} catch (ParseException e) {
			try {
				deadline = new SimpleDateFormat("yyyy-MM-dd").parse(MAXIMUM_DEADLINE);
			} catch (ParseException e1) {
			}
		}
	}

	/**
	 * Setter for the id of the task.
	 * 
	 * @param id
	 *            the id of the task
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * @return the content
	 */
	public String getContent() {
		return content;
	}

	/**
	 * @param content
	 *            the content to set
	 */
	public void setContent(String content) {
		this.content = content;
	}

	/**
	 * @return the deadline
	 */
	public Date getDeadline() {
		return deadline;
	}

	/**
	 * @return the isFinished
	 */
	public boolean isFinished() {
		return isFinished;
	}

	/**
	 * @param isFinished
	 *            the isFinished to set
	 */
	public void setFinished() {
		this.isFinished = true;
	}

	@Override
	public String toString() {
		try {
			// takes advantage of toString() implementation to format {"a":"b"}
			return new JSONObject().put("id", id).put("name", name).put("content", content)
					.put("isFinished", isFinished).put("deadline", deadline.toString()).toString();
		} catch (JSONException e) {
			return null;
		}
	}

}
