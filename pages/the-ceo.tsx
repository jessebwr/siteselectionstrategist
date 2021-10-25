import type { NextPage } from 'next';
import Image from 'next/image';
import { primaryColor } from '../styles/tokens';

const Home: NextPage = () => {
  return (
    <div
      css={{
        backgroundColor: '#282828',
        overflowY: 'scroll',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        css={{
          paddingTop: '6rem',
          fontSize: '38px',
          fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
          textTransform: 'uppercase',
          color: primaryColor,
          lineHeight: '2em',
          letterSpacing: '1px',
        }}
      >
        The CEO
      </div>
      <div>
        <div
          css={{
            margin: '1rem 0',
            width: 80,
            height: 3,
            backgroundColor: primaryColor,
          }}
        />
      </div>
      <div
        css={{
          paddingTop: '1rem',
          paddingBottom: '5rem',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          css={{
            paddingRight: '7rem',
          }}
        >
          <Image src="/assets/images/ecwr.png" height="500" width="350" />
        </div>
        <div
          css={{
            maxWidth: 700,
            width: '40%',
            lineHeight: 1.8,
          }}
        >
          <div
            css={{
              textTransform: 'uppercase',
              color: primaryColor,
              fontFamily: "'Lato',Helvetica,Arial,Lucida,sans-serif",
              fontWeight: 700,
              letterSpacing: 1,
              fontSize: 14,
            }}
          >
            ELIZABETH CARAGAY WATTS-RUSSELL
          </div>
          <div
            css={{
              paddingTop: '1rem',
              fontFamily: "'Lato',Helvetica,Arial,Lucida,sans-serif",
              fontSize: 16,
            }}
          >
            Elizabeth Caragay Watts-Russell is a seasoned hospitality industry
            professional with over twenty years of experience working with the
            big hotel brands and boutique properties in the areas of
            Administration, Food and Beverage, and Room Sales. Subsequently, she
            branched out into hotel site selection for the Meetings, Incentives,
            Conferences, and Exhibitions (MICE) market. Also a Paralegal, she is
            well-versed in hotel negotiation and contracting, well at ease with
            both sides of the trade, as a hotelier and a buyer. She leverages
            her strong relationships with hotels and destination leaders to
            bring the most value adds to any program.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
