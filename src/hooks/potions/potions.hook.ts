import { graphql, useStaticQuery } from 'gatsby';
import { AllContentfulPotions, Potions } from './potions.interface';

export default (): Potions[] => {
  const { allContentfulPotions } = useStaticQuery<AllContentfulPotions>(graphql`
        query{
            allContentfulPotions {
                edges {
                    node {
                        name
                        description
                        id
                    }
                }
            }
        }
    `);

  return allContentfulPotions.edges;
};
