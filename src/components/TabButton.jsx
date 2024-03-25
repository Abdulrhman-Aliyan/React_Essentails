export default function TabButton({children, onSelect}) {

    function handleClick() {
        console.log("Hello World - Clicked!");
    }

    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}