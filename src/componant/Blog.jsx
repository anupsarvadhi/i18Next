import React from 'react'
import Card from 'react-bootstrap/Card'
import '../App.css'
import { useTranslation } from 'react-i18next'

const Blog = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="card-display">
        <div className="card-detils">
          <Card style={{ width: '20rem', height: '10rem' }}>
            <Card.Body>
              <Card.Title>{t('forth_title')}</Card.Title>
              <Card.Text>{t('forth_Detail')}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="card-details">
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>{t('fifth_title')}</Card.Title>
              <Card.Text>{t('fifth_Detail')}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="card-details">
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>{t('six_title')}</Card.Title>
              <Card.Text>{t('six_Detail')}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Blog
