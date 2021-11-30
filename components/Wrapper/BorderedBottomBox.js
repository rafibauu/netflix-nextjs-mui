import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

const BorderedBottomBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  borderBottom: `8px solid ${grey[900]}`
}))

export default BorderedBottomBox
