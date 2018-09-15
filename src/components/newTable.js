import React, {Component} from 'react';
import DropCells from "./dropCells";
export default class NewTable extends React.Component {

    render() {

        return <div>
            <table>
                <thead>
                <tr>
                    <td>chore</td>
                    <td>mon</td>
                    <td>tue</td>
                    <td>wed</td>
                    <td>thu</td>
                    <td>fri</td>
                    <td>sat</td>
                    <td>sun</td>
                </tr>
                </thead>
                <tbody>

                {this.props.cellChores.map(chore => {
                    return <tr>
                    <td>{chore.props.children}</td>
                    <DropCells item = {this.props.cellNames}/>
                    <DropCells item = {this.props.cellNames}/>
                    <DropCells item = {this.props.cellNames}/>
                    <DropCells item = {this.props.cellNames}/>
                    <DropCells item = {this.props.cellNames}/>
                    <DropCells item = {this.props.cellNames}/>
                    <DropCells item = {this.props.cellNames}/>

                    </tr>
                })}
                </tbody>
            </table>
                </div>

    }
}
