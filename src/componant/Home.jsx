import React from 'react'
import Card from 'react-bootstrap/Card'
import '../App.css'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="card-display">
        <div className="card-details">
          <Card style={{ width: '20rem', height: '10rem' }}>
            <Card.Body>
              <Card.Title>{t('first_title')}</Card.Title>
              <Card.Text>{t('first_Detail')}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="card-details">
          <Card style={{ width: '20rem', height: '10rem' }}>
            <Card.Body>
              <Card.Title>{t('second_title')}</Card.Title>
              <Card.Text>{t('second_Detail')}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="card-details">
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>{t('third_title')}</Card.Title>
              <Card.Text>{t('third_Detail')}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home
