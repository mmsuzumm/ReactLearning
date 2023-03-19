import styles from './Post.module.css';
console.log(styles);
export default function Post(props) {
  const { userId, title, body } = props;
  return (
    <div className={styles.post}>
      <big>User ID:</big> <small>{userId}</small>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
