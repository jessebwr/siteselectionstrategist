import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { primaryColor } from '../styles/tokens';

const Home: NextPage = () => {
  return (
    <div
      css={{
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        css={{
          backgroundImage: "url('/assets/images/about-background.jpeg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      >
        <div
          css={{
            backdropFilter: 'brightness(0.4)',
            padding: '18rem 0rem 18rem 7rem',
            fontWeight: 700,
            fontSize: 48,
            letterSpacing: 3,
            lineHeight: '1.4em',
            fontFamily: "'Lato',Helvetica,Arial,Lucida,sans-serif",
            textTransform: 'uppercase',
            color: primaryColor,
          }}
        >
          About Us
        </div>
      </div>
      <div
        css={{
          padding: '4rem 6rem',
          backgroundColor: '#fff',
          fontFamily: "'Lato',Helvetica,Arial,Lucida,sans-serif",
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <div
            css={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <div css={{ width: '50%', minWidth: 467, padding: '0 1rem' }}>
              <div
                css={{
                  fontSize: 30,
                  fontFamily: "'Lato',Helvetica,Arial,Lucida,sans-serif",
                  color: '#333',
                  lineHeight: '1em',
                  fontWeight: 700,
                  textAlign: 'left',
                }}
              >
                Core Competence
              </div>
              <div>
                <div
                  css={{
                    margin: '1.5rem 0 2rem 0',
                    width: 40,
                    height: 3,
                    backgroundColor: primaryColor,
                  }}
                />
              </div>
              <div
                css={{
                  fontSize: 16,
                  letterSpacing: 1,
                  lineHeight: '2em',
                  color: '#666',
                }}
              >
                SiteSelectionStrategist LLC is the meeting planner’s conference
                site selection partner and advocate from the moment of inception
                through the conclusion of a program.
              </div>
              <div
                css={{
                  fontSize: 16,
                  letterSpacing: 1,
                  lineHeight: '2em',
                  color: '#666',
                  paddingTop: '1rem',
                }}
              >
                From intimate meetings of ten people to large-scale incentive
                programs or convention for thousands, globally,
                SiteSelectionStrategist LLC is your ValuePlus and FeeFree site
                selection ally.
              </div>
            </div>
            <div
              css={{
                width: '50%',
                minWidth: 467,
                padding: '0 1rem',
              }}
            >
              <div
                css={{
                  contain: 'content',
                  height: 350,
                  width: 467,
                  boxShadow: '0px 12px 18px -6px rgb(0 0 0 / 30%)',
                }}
              >
                <Image src="/assets/images/competence-1.jpeg" layout="fill" />
              </div>
            </div>
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <div
              css={{
                width: '50%',
                minWidth: 467,
                padding: '0 1rem',
              }}
            >
              <div
                css={{
                  contain: 'content',
                  height: 350,
                  width: 467,
                  boxShadow: '0px 12px 18px -6px rgb(0 0 0 / 30%)',
                }}
              >
                <Image src="/assets/images/competence-2.jpeg" layout="fill" />
              </div>
            </div>
            <div css={{ width: '50%', minWidth: 467, padding: '0 1rem' }}>
              <div>
                <div
                  css={{
                    margin: '1.5rem 0 2rem 0',
                    width: 40,
                    height: 3,
                    backgroundColor: primaryColor,
                  }}
                />
              </div>
              <div
                css={{
                  fontSize: 16,
                  letterSpacing: 1,
                  lineHeight: '2em',
                  color: '#666',
                }}
              >
                SiteSelectionStrategist LLC is the meeting planner’s conference
                site selection partner and advocate from the moment of inception
                through the conclusion of a program.
              </div>
              <div
                css={{
                  fontSize: 16,
                  letterSpacing: 1,
                  lineHeight: '2em',
                  color: '#666',
                  paddingTop: '1rem',
                }}
              >
                From intimate meetings of ten people to large-scale incentive
                programs or convention for thousands, globally,
                SiteSelectionStrategist LLC is your ValuePlus and FeeFree site
                selection ally.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
