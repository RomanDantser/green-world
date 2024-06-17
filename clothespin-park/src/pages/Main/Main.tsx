import Header from "../../components/Header/Header";
import { Carousel } from "antd";
import * as styles from "./Main.module.css";

export default function Main() {
  return (
    <>
      <Header />
      <h1>Текущие события</h1>
      <Carousel className={styles.carousel}>
        {new Array(5).fill(0).map((item, index) => {
          return (
            <div key={index} className={styles.imageMock}>
              Картинка {index}
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
