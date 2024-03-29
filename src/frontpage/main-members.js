function memberCards() {
  return `
        <section class="cards">
            <member-cards imageInput="../images/drejtimi/drejtimi-social.jpg" backColor="#1E3561"
                class="member-cards"
                style="margin:21px;">
                <h2 class="text-member" slot="title">Drejtimi Social</h2>
                <h3 class="text-member" slot="subtitle"></h3>
                <p  class="text-member" slot="text"></p>
                <button class="btn btn-secondary"
                    slot="button">Lexo më shumë</button>
                <div slot="description" class="members">
                    <h2>DREJTIMI SOCIAL</h2>
                    <p>
                       Avokatësi, lobim, advokim për të drejtat e të rinjve  

                    Ndërmjetësim dhe zgjidhje konfliktesh për të rinjtë  
                    
                    Edukim për shëndetin tek të rinjtë  
                    
                    Barazia gjinore 
                    
                    Këshillim individual dhe në grup  
                    
                    Klasa mbështetëse për të rinjtë në konflikt me ligjin dhe për të rinjtë përdorues të substancave narkotike  
                    
                    Shkëmbime ndërkulturore  
                    
                    Kampe verore e dimërore  
                    
                    Kënd social për të rinjtë  
                    
                    Promovim i artistëve të rinj  
                    
                    Promovim i aktivizmit, vullnetarizmit , përfshirjes të të rinjve në vendimarrje  
                    
                    Studime sociale bazuar në shkencen e punës sociale                    </p>
                </div>
            </member-cards>
            <member-cards imageInput="../images/drejtimi/drejtimi-ekonomik.jpg" backColor="#185472"
                class="member-cards"
                style="margin:21px;">
                <h2 class="text-member" slot="title">Drejtimi Ekonomik</h2>
                <h3 class="text-member" slot="subtitle"></h3>
                <p  class="text-member" slot="text"></p>
                <button class="btn btn-secondary"
                    slot="button">Lexo më shumë</button>
                    <div slot="description" class="members">
                    <h2>DREJTIMI EKONOMIK</h2>
                    <p>
                                                                Ndërmjetësim për punësim  

                    Këshillim karriere  
                    
                    Start up për bizneset rinore  
                    
                    Start up për teknologjinë  
                    
                    Studime tregu për orientimin e të rinjve në tregun e punës                    </p>
                </div>
            </member-cards>
        </section>
        `;

}

export default memberCards();