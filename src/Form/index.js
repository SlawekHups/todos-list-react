import "./style.css";

const Form = () => (
    <form className="form form__content ">
        <input className="form__field " placeholder="Co jest do zrobienia ?" />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;