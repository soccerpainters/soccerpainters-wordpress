import React, { Component } from "react";
import Link from "next/link";

const MenuItem = ({ page }) => {
    console.log(page);
    return (
        <Link href={`/${page.slug}`}>
            <a>{ page.title.rendered }</a>
        </Link>
    )
};

class Menu extends Component {
    constructor() {
        super();
    }

    render () {

        console.log(this.props.pages);

        const menuItems = this.props.pages.map((page, index) => {
            return (
                <MenuItem key={index} page={page} />
            )
        });

        return (
            <div>
                {menuItems}
            </div>
        )
    }


}

export default Menu;
