import CloseBtn from "./closebtn";

function PageWrapper(props){
    return(
        <div class="bg-sectionbgcolor w-screen md:w-[60%] h-screen absolute py-28 px-10 overflow-y-auto">
            <CloseBtn></CloseBtn>
            {props.children}
        </div>
    )
}

export default PageWrapper;