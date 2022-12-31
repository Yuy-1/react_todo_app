

// styles
import styles from "./TaskItem.module.css"

const TaskItem = ({task}) => {
  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          checked={task.checked}
          //onChange={}
          name={task.name}
          id={task.id}
        />
        <label
          htmlFor={task.id}
          className={styles.label}
        >
          {task.name}
          <p className={styles.checkmark}>

          </p>
        </label>
      </div>

    </li>
  )
}

export default TaskItem