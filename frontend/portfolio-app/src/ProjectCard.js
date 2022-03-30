import { Card, Divider, Text, useTheme } from "@nextui-org/react";


function ProjectCard(props){

    const { theme } = useTheme();

    return(
        <div className = "ProjectCard">
            <Card bordered shadow = {true}>
                <Text style = {{
                    fontSize: theme.fontSizes.md.value,
                }}>
                    {props.title}
                </Text>
                <Divider/>
                <Text style = {{
                    fontSize: theme.fontSizes.md.value,
                }}>
                    {props.body}
                </Text>
            </Card>
        </div>
    );
}

export default ProjectCard;