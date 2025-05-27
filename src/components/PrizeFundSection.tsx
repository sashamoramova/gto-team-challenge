
import React from 'react';
import styles from './PrizeFundSection.module.css';

const PrizeFundSection: React.FC = () => {
  return (
    <section className={styles.prizeFundSection}>
      {/* Декоративные элементы */}
      <div className={styles.decorativeElements}>
        <div className={styles.shuttlecock}></div>
        <div className={styles.trophy}></div>
        <div className={styles.sneaker}></div>
        <div className={styles.ping_pong}></div>
      </div>

      {/* Призовой фонд */}
      <div className={styles.prizeFundContainer}>
        <h2 className={styles.prizeFundTitle}>
          ПРИЗОВОЙ ФОНД - ГТО:<br />
          КОМАНДНЫЙ ТУРНИР
        </h2>
        
        <div className={styles.prizesGrid}>
          <div className={styles.trophyImage}>
            <div className={styles.trophyIcon}>🏆</div>
          </div>
          
          <div className={styles.prizesInfo}>
            <div className={styles.prizeItem}>
              <div className={styles.placeNumber}>1 место</div>
              <div className={styles.prizeText}>
                Чек на 1 000 000 рублей + Кубок победителя + Медали
              </div>
            </div>
            
            <div className={styles.prizeItem}>
              <div className={styles.placeNumber}>2 место</div>
              <div className={styles.prizeText}>
                Чек на 500 000 рублей + Кубок финалиста + Медали
              </div>
            </div>
            
            <div className={styles.prizeItem}>
              <div className={styles.placeNumber}>3 место</div>
              <div className={styles.prizeText}>
                Чек на 250 000 рублей + Кубок за 3 место + Медали
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Личный зачет */}
      <div className={styles.personalScoreContainer}>
        <h3 className={styles.personalScoreTitle}>
          ТВОЙ<br />
          ЛИЧНЫЙ<br />
          ЗАЧЕТ
        </h3>
        <p className={styles.personalScoreText}>
          Каждый участник может стать в индив зачет-победителем! 
          За лучшие персональные достижения каждого участника, 
          мы дадим отдельные награды всем лучшим в своей номинации-категории. 
          Твой личный зачет – это твоя позиция, твой уровень, 
          твое превосходство и стойка-спортивная репутация
        </p>
      </div>

      {/* Номинации */}
      <div className={styles.nominationsContainer}>
        <h3 className={styles.nominationsTitle}>НОМИНАЦИИ</h3>
        
        <div className={styles.nominationsGrid}>
          <div className={styles.nominationItem}>
            <span className={styles.nominationText}>САМЫЙ БЫСТРЫЙ</span>
            <div className={styles.nominationIcon}>⚪</div>
          </div>
          
          <div className={styles.nominationItem}>
            <span className={styles.nominationText}>ЛУЧШИЙ ВРАТАРЬ</span>
            <div className={styles.nominationIcon}>⚪</div>
          </div>
          
          <div className={styles.nominationItem}>
            <span className={styles.nominationText}>САМЫЙ СИЛЬНЫЙ</span>
            <div className={styles.nominationIcon}>⚪</div>
          </div>
          
          <div className={styles.nominationItem}>
            <span className={styles.nominationText}>ЛУЧШИЙ НАПАДАЮЩИЙ</span>
            <div className={styles.nominationIcon}>⚪</div>
          </div>
          
          <div className={styles.nominationItem}>
            <span className={styles.nominationText}>САМЫЙ АКТИВНЫЙ БОЛЕЛЬЩИК</span>
            <div className={styles.nominationIcon}>⚪</div>
          </div>
          
          <div className={styles.nominationItem}>
            <span className={styles.nominationText}>САМЫЙ МЕТКИЙ</span>
            <div className={styles.nominationIcon}>⚪</div>
          </div>
        </div>
      </div>

      {/* Как это было в прошлом году */}
      <div className={styles.lastYearContainer}>
        <h3 className={styles.lastYearTitle}>
          КАК ЭТО БЫЛО В<br />
          ПРОШЛОМ ГОДУ
        </h3>
        <p className={styles.lastYearText}>
          Вот фото с прошлого года! Смотри, как здорово было участникам! 
          Насколько живые эмоции и победный настрой придали им 
          мероприятия.
        </p>
      </div>
    </section>
  );
};

export default PrizeFundSection;
