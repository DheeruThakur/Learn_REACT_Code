import Footer from "../Footer"
import { render } from "@testing-library/react"

test("footer should be loaded on rendering footer" , () => {
    const footer = render(
        <Footer/>
    )
    const footerContent = footer.getByTestId("footer")
    // console.log(footerContent)
    expect(footerContent.textContent).toBe("Copyrights , T&C")
})