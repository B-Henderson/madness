import { graphql, useStaticQuery } from 'gatsby';
import { AllContentfulMadness, Madness } from './madness.interface';

export default (): Madness[] => {
  const { allContentfulMadness } = useStaticQuery<AllContentfulMadness>(graphql`
        query{
            allContentfulMadness {
                edges {
                    node {
                        calculation
                        duration
                        id
                        name
                        order
                        slug
                        description {
                            internal {
                                content
                            }
                        }
                        effects {
                            condition
                            message {
                                id
                                internal {
                                content
                                }
                            }
                        }
                    }   
                }            
            }
        }
    `);

  return allContentfulMadness.edges;
};
