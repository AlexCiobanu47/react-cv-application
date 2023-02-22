import React , {Component} from "react";
import uniqid from "uniqid";
class Skills extends Component{
    constructor(){
        super();

        this.state = {
            skill: '',
            skills: [{
                id: uniqid(),
                skill: 'skill',
            },],
            edit: false,
        };
    }
    handleSkillChange =(e) => {
        this.setState({
            skill: e.target.value,
        })
    };
    handleSkillRemove = (key) =>{
        const newSkills = this.state.skills.filter(skill =>skill.id !== key)
        this.setState({
            skills: newSkills
        })
    }
    onSubmitSkill = (e) =>{
        e.preventDefault();
        this.setState({
            skills:this.state.skills.concat({
                id: uniqid(),
                skill: this.state.skill
            }),
            skill: '',
        })
        this.toggleEdit();
    }
    toggleEdit = (e) =>{
        this.setState(prevState =>({
            edit: !prevState.edit
        }))
    }
    render(){
        const {
            skill,
            skills,
            edit,
        } = this.state;
        return(
            <div className="skills-info">
                <div className="skills-input">
                    <div className="skills-display">
                        <h2>Skills:</h2>
                        <ul>
                            {skills.map(skill =>{
                                return(
                                    <li key = {skill.id}>{skill.skill}
                                        <button 
                                            onClick={() => this.handleSkillRemove(skill.id)}
                                            className = 'remove-skill-button'
                                            >
                                                Remove</button>
                                    </li>
                                    
                                )
                            })}
                        </ul>
                    </div>
                    <button
                        type = "button"
                        className="skill-edit-button"
                        onClick={this.toggleEdit}
                    >
                        Edit
                    </button>
                </div>
                {edit &&
                    <div>
                        <form>
                            <fieldset className="skills">
                                <label htmlFor="">Skill:</label>
                                <input
                                    type = 'text'
                                    value = {skill}
                                    onChange={this.handleSkillChange}
                                />
                                <button 
                                    type = 'button'
                                    className="add-skill-button"
                                    onClick={this.onSubmitSkill}
                                    >
                                        Add
                                </button>
                            </fieldset>
                        </form>
                    </div>
                }
            </div>
        )
    }
}

export default Skills;