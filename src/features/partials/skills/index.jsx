import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { voteSkill } from '../../portfolio/portfolioSlice'
import { skills } from '../../sources/getSkills'
import './skills.css'

const Skills = () => {
    
    const dispatch = useDispatch()
    const data = useSelector(voteSkill)

    //console.log(data)

    return (
        <div className='skill-section'>
            <h3 className='my-skills-title'>My skills</h3>
            <br />
            <div className='container-skill'>
                {
                skills.map((skill) => {
                    return (
                        <div key={skill.id}> 

                            <div className='skill-item'>{skill.tool}</div>
                            <div className='container-img'>
                                <img className='img-skill' src={skill.icon} alt="" />    
                            </div>                     
                            <div>
                                Votes: {data.payload.votation.skills[skill.id].count}
                                <br /><br />
                            </div>
                            <div>
                                <button className='button-vote'
                                onClick={() => dispatch(voteSkill(skill.id))}>Vote here</button>
                            </div>
                        
                        
                         </div>
                        
        
                    )
                })
            }
            </div>
            


        </div>
    )
}

export default Skills