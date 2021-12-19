import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import BorderedBottomBox from "../../Wrapper/BorderedBottomBox"
import { styled } from '@mui/material/styles'
import { useState } from "react"
import AddIcon from '@mui/icons-material/Add'

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white
}))

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.common.black}`,
  padding: theme.spacing(1, 3),
  '&.Mui-expanded': {
    padding: theme.spacing(0, 3),
  }
}))

const FAQ = () => {
  const [activeItem, setActiveItem] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setActiveItem(isExpanded ? panel : false)
  }

  return (
    <BorderedBottomBox>

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography
          variant="h3"
          component="h3"
          color="common.white"
          align="center"
          sx={{ mb: 6 }}
        >
          Frequently Asked Questions
        </Typography>
        <Stack spacing={1} mb={8}>
          <CustomAccordion square expanded={activeItem === 'panel1'} onChange={handleChange('panel1')}>
              <CustomAccordionSummary
                expandIcon={<AddIcon sx={{ color: 'common.white', fontSize: 48 }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h5">What is Netflix?</Typography>
              </CustomAccordionSummary>
              <AccordionDetails>
                <Typography variant="h5" mb={4}>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more on
                  thousands of internet-connected devices.
                </Typography>
                <Typography variant="h5">
                  You can watch as much as you want, whenever you want without a
                  single commercial – all for one low monthly price. There is
                  always something new to discover and new TV shows and movies are
                  added every week!
                </Typography>
              </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion square expanded={activeItem === 'panel2'} onChange={handleChange('panel2')}>
            <CustomAccordionSummary
              expandIcon={<AddIcon sx={{ color: 'common.white', fontSize: 48 }} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography variant="h5">How much does Netflix cost?</Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography variant="h5">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from IDR54,000 to IDR186,000 a month. No extra costs, no
                contracts.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion square expanded={activeItem === 'panel3'} onChange={handleChange('panel3')}>
            <CustomAccordionSummary
              expandIcon={<AddIcon sx={{ color: 'common.white', fontSize: 48 }} />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography variant="h5">Where can I watch?</Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography variant="h5" mb={4}>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
              </Typography>
              <Typography variant="h5">
                You can also download your favorite shows with the iOS, Android,
                or Windows 10 app. Use downloads to watch while you are on the
                go and without an internet connection. Take Netflix with you
                anywhere.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion square expanded={activeItem === 'panel4'} onChange={handleChange('panel4')}>
            <CustomAccordionSummary
              expandIcon={<AddIcon sx={{ color: 'common.white', fontSize: 48 }} />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography variant="h5">How do I cancel?</Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography variant="h5">
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion square expanded={activeItem === 'panel5'} onChange={handleChange('panel5')}>
            <CustomAccordionSummary
              expandIcon={<AddIcon sx={{ color: 'common.white', fontSize: 48 }} />}
              aria-controls="panel5-content"
              id="panel5-header"
            >
              <Typography variant="h5">What can I watch on Netflix?</Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography variant="h5">
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion square expanded={activeItem === 'panel6'} onChange={handleChange('panel6')}>
            <CustomAccordionSummary
              expandIcon={<AddIcon sx={{ color: 'common.white', fontSize: 48 }} />}
              aria-controls="panel6-content"
              id="panel6-header"
            >
              <Typography variant="h5">Is Netflix good for kids?</Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography variant="h5" mb={4}>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and movies in their own space.
              </Typography>
              <Typography variant="h5">
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don’t want kids to see.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
        </Stack>
        <Typography
          variant="h6"
          component="p"
          color="common.white"
          textAlign="center"
          sx={{ my: 3 }}
        >
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <Grid container>
            <Grid item xs>
              <TextField
                variant="filled"
                label="Email address"
                fullWidth
                sx={{ bgcolor: 'common.white' }}
              />
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ height: '100%', borderRadius: '2px'}}
              >
                Get started
              </Button>
            </Grid>
          </Grid>
      </Container>



    </BorderedBottomBox>
  )
}

export default FAQ
