import React, { Component, Fragment as F } from 'react';
import Categories from "./Categories";
import MainDisplay from "./MainDisplay";

export default class MainContent extends Component {

    state = {
        selectedCategory: null
    };

    componentDidMount() {
    }
    componentDidUpdate() {
        if(this.state.selectedCategory) {
            const element = document.getElementById('test');
            element.scrollIntoView({behavior: "smooth"});
        }
    }

    selectCategory = (name) => {
        this.setState({
            selectedCategory: name
        });
        this.forceUpdate()
    };


    render() {

        return (
            <F>
            <div className="album py-5 mt-3">
                <div className="container">
                    <h2 className="text-center pb-3">Välj en kategori</h2>
                    <div className="row">
                        <Categories clickCategory={this.selectCategory}/>
                    </div>
                </div>
            </div>
        {this.state.selectedCategory !== null && <MainDisplay category={this.state.selectedCategory}/>}
            </F>
        )
    }
}