export default function quiz(){

    /**
     * As the name kinda implies,  it is the keeper of questions for the quiz
     */
    const quizQuestions = [
        {
            category: 'NBA',
            question: 'Who said this iconic statement? "I got one more than Shaq, you can take that to the bank" ',
            options: ["Lebron James", "Micheal Jordan", "Larry Bird", "Kobe Bryant"],
            answer: 'Kobe Bryant'
        },

        {
            category: 'NBA',
            question: 'Who is the player with the most turnovers in finals History?',
            options: ["Lebron James", "Kyle Lowry", "Kyrie Irving", "Shaquille O'Neal"],
            answer: 'Lebron James'
        },
        {
            category: 'NBA',
            question: 'Who is the player that has the current record of most points scored in a quarter and how many did He get?',
            options: ["Klay Thompson, 37", "Luka Doncic, 40", "Joel Embiid, 25", "Micheal Jordan, 50"],
            answer: 'Klay Thompson, 37',
        },

        {
            category: 'NBA',
            question: "Who is the current record holder of most 3's",
            options: ["Kobe Bryant", "Austin Reaves", "Shaquille O'Neal", "Steph Curry"],
            answer: 'Steph Curry',
        },

        {
            category: 'NBA',
            question: 'Which team has the best regular season record in NBA history',
            options: ["Los Angeles Lakers", "Minnesota Timberwolves", "Oklahoma City Thunder", "Golden State Warriors"],
            answer: 'Golden State Warriors'
        },

        {
            category: 'NBA',
            question: 'How many fouls can a player commit before being ejected?',
            options: [2, 10,6, 5],
            answer: 6,
        },

       
        {
            category: 'NBA',
            question: 'What NBA legend was commonly referred to as The Round Mound of Rebound?',
            options: ['Kobe Bryant', 'Dwayne Wade','Chuck Eatsalot','Charles Barkley'],
            answer: 'Charles Barkley'
        },

        {
            category: 'NBA',
            question: 'How long are NBA quarters?',
            options: ['10 Mins', '8 Mins','11 Mins','12 Mins'],
            answer: '12 Mins'
        },

        {
            category: 'NBA',
            question: 'Which player won the 2000 Slam Dunk Contest?',
            options: ['Micheal Jordan', 'Wilt Chamberlain','Vince Carter','Kareem AbdulJabbar'],
            answer: 'Vince Carter'
        },
       

        {
            category: 'NBA',
            question: 'One of these players had a quadruple double, who is it?',
            options: ['Dirk Nowitski', 'Wilt Chamberlain','Hakeem Olajuwon','Bill Russel'],
            answer: 'Hakeem Olajuwon'
        },


        {
            category: 'EPL',
            question: 'Which team has won the most premier league titles?',
            options: ['Arsenal', 'Chelsea','Manchester United','Tottenham Hotspurs 😂 😂 😂 '],
            answer: 'Manchester United'
        },

        {
            category: 'EPL',
            question: 'Who got the quickest red card in premier league history?',
            options: ['Keith Gillespie', 'Rio Ferdinard','Dan Burn','Javier Mascherano'],
            answer: 'Keith Gillespie'
        },
        
        

        {
            category: 'EPL',
            question: 'Which one of them lads got the fastest EPL goal in history?',
            options: ['Phillip Billing', 'Shane Long','Wayne Rooney','Kun Aguero'],
            answer: 'Phillip Billing'
        },


        {
            category: 'EPL',
            question: 'Who is the only person on this list to win the coveted FIFA Golden Ball in the modern EPL',
            options: ['Lionel Messi', 'Cristiano Ronaldo','Carlos Tevez','Erling Haaland'],
            answer: 'Cristiano Ronaldo'
        },



        {
            category: 'EPL',
            question:  'Which team is the only team to record 100 points in a premeir league season?',
            options: ['Manchester United', 'Chelsea','Liverpool','Manchester City'],
            answer: 'Manchester City'
        },



        {
            category: 'EPL',
            question: 'How old was Wayne Rooney when he first played in the Premier League?',
            options: ['12 Years Old', 'Underage','Omo Kekere','16 Years Old'],
            answer: '16 Years Old'
        },



        {
            category: 'EPL',
            question: 'How many clubs competed in the Premier League’s first season?',
            options: [22, 38,34,30],
            answer: 22
        },



        {
            category: 'EPL',
            question: 'As of 2017, which club scored the most headed goals in the Premier League?',
            options: ['Burnley', 'Arsenal','Newcastle','Aston Villa'],
            answer: 'Arsenal'
        },



        {
            category: 'EPL',
            question: 'Who scored the goal that won Manchester City the title in 2011—12?',
            options: ['Mario Ballotelli', 'David Silva','Kun Aguero','Joe Hart'],
            answer: 'Kun Aguero'
        },


        {
             category: 'EPL',
            question: 'Who was the youngest player to reach 100 Premier League goals?',
            options: ['Eric Cantona', 'Cristiano Ronaldo','Harry Kane','Micheal Owen'],
            answer: 'Micheal Owen'
        },


        


    ]


    return quizQuestions;
}