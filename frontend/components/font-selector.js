import { Container, Breakpoint, Grid, Span } from 'react-responsive-grid';

export default class FontSelector extends React.Component {

   

   constructor(props) {
     super(props);
     this.state = {

     };
   }

   onFontSelected() {
   
   }

   renderSelectedFont() {

   }

   renderFontList() {
      const { fonts } = this.props
      return <Grid columns={3}>
         {_.map(fonts, (f) => (
            <Span columns={1}>
                <span style={{ fontFamily: f.fontFamily }}>{f.name}</span>
            </Span>
         ))}
      </Grid>;     
   }

   render() {
	return (
		<div>
			<Breakpoint maxWidth={700} widthMethod="componentWidth">
				{this.renderSelectedFont()}
				{this.renderFontList()}
			</Breakpoint>
			<Breakpoint minWidth={700} widthMethod="componentWidth">
				<Grid columns={2}>
					<Span columns={1}>
						{this.renderSelectedFont()}
					</Span>
					<Span columns={1}>
						{this.renderFontList()}
					</Span>
				</Grid>>
			</Breakpoint>
		</div>
      );       
   }

}
