import React, { useState } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import styled, { keyframes } from 'styled-components';
import { RemoveScroll } from 'react-remove-scroll';
import Swal from 'sweetalert2';

import { toggleEditCourseModal } from '../../../actions';
import ButtonText from '../buttonText';
import FlatButton from '../flatButton';

const FADE_IN_DURATION = '0.45s';

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const Container = styled.div`
  animation: ${fadeIn} ${FADE_IN_DURATION} ease;
  background-color: '#fff';
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 480px) {
    margin-top: 40px;
  }
`;

const SectionTitle = styled.p`
  font-family: neue-haas-grotesk-text, sans-serif;
  font-weight: 700;
  font-style: black;
  font-size: 32px;
  text-align: left;
  opacity: 0.25;
  margin-top: 60px;
  margin-bottom: 15px;
  color: #111;
  cursor: default;
`;

const AccountInfoRow = styled.div`
  display: flex;
  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileAccountInfoRow = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 80vw;
  }
`;

const EditCourseModal = ({ open, toggleEditCourseModal }) => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [price, setPrice] = useState('');
  const [productId, setProductId] = useState('');
  const [slug, setSlug] = useState('');
  const [tagline, setTagline] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [bioImage, setBioImage] = useState('');
  const [trailerUrl, setTrailerUrl] = useState('');
  const [thumbnailImage, setThumbnailImage] = useState('');
  const [bioTitle, setBioTitle] = useState('');
  const [bioDescription, setBioDescription] = useState('');
  const [readMoreUrl, setReadMoreUrl] = useState('');
  const [twitterUrl, setTwitterUrl] = useState('');
  const [facebookUrl, setFacebookUrl] = useState('');
  const [redditUrl, setRedditUrl] = useState('');

  const handleSubmit = () => {
    return console.log('handling add course submit');
  };

  const handleDelete = () => {
    Swal.fire({
      title: 'Delete Course',
      text: 'Are you sure you want to delete this course?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.value) {
        Swal.fire(
          'Course Deleted!',
          'Be sure to delete the course playlist in JW Player.',
          'success',
        );
      }
    });
  };

  return (
    <Dialog
      open={open}
      onClose={() => toggleEditCourseModal(false)}
      aria-labelledby="form-dialog-title"
      fullScreen
    >
      <DialogContent style={{ margin: 0, padding: 0 }}>
        <Container>
          <SectionTitle>Edit Course Details</SectionTitle>
          <AccountInfoRow>
            <TextField
              style={{ marginBottom: 12.5, marginRight: 10 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={courseName}
              onChange={e => setCourseName(e.target.value)}
              margin="dense"
              id="course-name"
              label="Course Name"
              type="name"
              placeholder="Course Name"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={instructorName}
              onChange={e => setInstructorName(e.target.value)}
              margin="dense"
              id="instructor-name"
              label="Instructor Name"
              type="name"
              placeholder="Instructor Name"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </AccountInfoRow>
          <AccountInfoRow>
            <TextField
              style={{ marginBottom: 12.5, marginRight: 10 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={price}
              onChange={e => setPrice(e.target.value)}
              margin="dense"
              id="course-price"
              label="Price"
              type="amount"
              placeholder="44.95"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={productId}
              onChange={e => setProductId(e.target.value)}
              margin="dense"
              id="product-id"
              label="Product ID"
              type="text"
              placeholder="prod_B6F59AF2x2D"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </AccountInfoRow>
          <AccountInfoRow>
            <TextField
              style={{ marginBottom: 12.5, marginRight: 10 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={slug}
              onChange={e => setSlug(e.target.value)}
              margin="dense"
              id="course-slug"
              label="URL Slug"
              type="text"
              placeholder="course-name-slug"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={tagline}
              onChange={e => setTagline(e.target.value)}
              margin="dense"
              id="course-tagline"
              label="Course Tagline"
              type="text"
              placeholder="Teaches Music Production"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </AccountInfoRow>
          <AccountInfoRow>
            <TextField
              style={{ marginBottom: 12.5, marginRight: 10 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={coverImage}
              onChange={e => setCoverImage(e.target.value)}
              margin="dense"
              id="cover-image"
              label="Cover Image URL"
              type="text"
              placeholder="Cover"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={trailerUrl}
              onChange={e => setTrailerUrl(e.target.value)}
              margin="dense"
              id="trailer-url"
              label="Trailer URL"
              type="text"
              placeholder="https://jwplayer.com/jd72hasd"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </AccountInfoRow>
          <AccountInfoRow>
            <TextField
              style={{ marginBottom: 12.5, marginRight: 10 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={thumbnailImage}
              onChange={e => setThumbnailImage(e.target.value)}
              margin="dense"
              id="thumbnail-image-url"
              label="Thumbnail Image URL"
              type="text"
              placeholder="https://imgur.com/as8h92b"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={bioImage}
              onChange={e => setBioImage(e.target.value)}
              margin="dense"
              id="bio-image-url"
              label="Bio Image URL"
              type="text"
              placeholder="https://imgur.com/as8h92b"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </AccountInfoRow>
          <AccountInfoRow>
            <TextField
              style={{ marginBottom: 12.5, marginRight: 10 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={bioTitle}
              onChange={e => setBioTitle(e.target.value)}
              margin="dense"
              id="bio-title"
              label="Bio Title"
              type="text"
              placeholder="Experience the Legend"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={bioDescription}
              onChange={e => setBioDescription(e.target.value)}
              margin="dense"
              id="bio-description"
              label="Bio Description"
              type="text"
              placeholder="https://imgur.com/as8h92b"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </AccountInfoRow>
          <AccountInfoRow>
            <TextField
              style={{ marginBottom: 12.5, marginRight: 10 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={readMoreUrl}
              onChange={e => setReadMoreUrl(e.target.value)}
              margin="dense"
              id="read-more-url"
              label="Read More URL"
              type="text"
              placeholder="https://genius.com/as8h92b"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={twitterUrl}
              onChange={e => setTwitterUrl(e.target.value)}
              margin="dense"
              id="twitter-lesson-url"
              label="Twitter URL"
              type="text"
              placeholder="https://twitter.com/as8h92b"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </AccountInfoRow>
          <AccountInfoRow>
            <TextField
              style={{ marginBottom: 12.5, marginRight: 10 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={facebookUrl}
              onChange={e => setFacebookUrl(e.target.value)}
              margin="dense"
              id="facebook-lesson-url"
              label="Facebook URL"
              type="text"
              placeholder="https://facebook.com/course-name"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={redditUrl}
              onChange={e => setRedditUrl(e.target.value)}
              margin="dense"
              id="reddit-lesson-url"
              label="Reddit URL"
              type="text"
              placeholder="https://reddit.com/course-name"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </AccountInfoRow>
          {/* NOTE: Mobile Responsive - Account Info Field */}
          <MobileAccountInfoRow>
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={courseName}
              onChange={e => setCourseName(e.target.value)}
              margin="dense"
              id="course-name"
              label="Course Name"
              type="name"
              placeholder="Course Name"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={instructorName}
              onChange={e => setInstructorName(e.target.value)}
              margin="dense"
              id="instructor-name"
              label="Instructor Name"
              type="name"
              placeholder="Instructor Name"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </MobileAccountInfoRow>
          <MobileAccountInfoRow>
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={price}
              onChange={e => setPrice(e.target.value)}
              margin="dense"
              id="course-price"
              label="Price"
              type="amount"
              placeholder="44.95"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={productId}
              onChange={e => setProductId(e.target.value)}
              margin="dense"
              id="product-id"
              label="Product ID"
              type="text"
              placeholder="prod_B6F59AF2x2D"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </MobileAccountInfoRow>
          <MobileAccountInfoRow>
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={slug}
              onChange={e => setSlug(e.target.value)}
              margin="dense"
              id="course-slug"
              label="URL Slug"
              type="text"
              placeholder="course-name-slug"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={tagline}
              onChange={e => setTagline(e.target.value)}
              margin="dense"
              id="course-tagline"
              label="Course Tagline"
              type="text"
              placeholder="Teaches Music Production"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </MobileAccountInfoRow>
          <MobileAccountInfoRow>
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={coverImage}
              onChange={e => setCoverImage(e.target.value)}
              margin="dense"
              id="cover-image"
              label="Cover Image URL"
              type="text"
              placeholder="Cover"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={trailerUrl}
              onChange={e => setTrailerUrl(e.target.value)}
              margin="dense"
              id="trailer-url"
              label="Trailer URL"
              type="text"
              placeholder="https://jwplayer.com/jd72hasd"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </MobileAccountInfoRow>
          <MobileAccountInfoRow>
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={thumbnailImage}
              onChange={e => setThumbnailImage(e.target.value)}
              margin="dense"
              id="thumbnail-image-url"
              label="Thumbnail Image URL"
              type="text"
              placeholder="https://imgur.com/as8h92b"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={bioImage}
              onChange={e => setBioImage(e.target.value)}
              margin="dense"
              id="bio-image-url"
              label="Bio Image URL"
              type="text"
              placeholder="https://imgur.com/as8h92b"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </MobileAccountInfoRow>
          <MobileAccountInfoRow>
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={bioTitle}
              onChange={e => setBioTitle(e.target.value)}
              margin="dense"
              id="bio-title"
              label="Bio Title"
              type="text"
              placeholder="Experience the Legend"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={bioDescription}
              onChange={e => setBioDescription(e.target.value)}
              margin="dense"
              id="bio-description"
              label="Bio Description"
              type="text"
              placeholder="https://imgur.com/as8h92b"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </MobileAccountInfoRow>
          <MobileAccountInfoRow>
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={readMoreUrl}
              onChange={e => setReadMoreUrl(e.target.value)}
              margin="dense"
              id="read-more-url"
              label="Read More URL"
              type="text"
              placeholder="https://genius.com/as8h92b"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={twitterUrl}
              onChange={e => setTwitterUrl(e.target.value)}
              margin="dense"
              id="twitter-lesson-url"
              label="Twitter URL"
              type="text"
              placeholder="https://twitter.com/as8h92b"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </MobileAccountInfoRow>
          <MobileAccountInfoRow>
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={facebookUrl}
              onChange={e => setFacebookUrl(e.target.value)}
              margin="dense"
              id="facebook-lesson-url"
              label="Facebook URL"
              type="text"
              placeholder="https://facebook.com/course-name"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              style={{ marginBottom: 12.5 }}
              // onChange={e => usernameChanged(e.target.value)}
              //onKeyPress={e => e.key === 'Enter' && this.handleSubmit()}
              value={redditUrl}
              onChange={e => setRedditUrl(e.target.value)}
              margin="dense"
              id="reddit-lesson-url"
              label="Reddit URL"
              type="text"
              placeholder="https://reddit.com/course-name"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </MobileAccountInfoRow>
          <FlatButton
            style={{
              width: 260,
              minHeight: 45,
              display: 'flex',
              alignItems: 'cemter',
              justifyContent: 'center',
              marginTop: 5,
              marginBottom: 10,
            }}
          >
            <ButtonText>SUBMIT CHANGES</ButtonText>
          </FlatButton>
          <FlatButton
            onClick={() => toggleEditCourseModal(false)}
            style={{
              width: 260,
              marginTop: 0,
              marginBottom: 20,
              background: '#ddd',
              minHeight: 45,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ButtonText style={{ color: '#555' }}>CANCEL</ButtonText>
          </FlatButton>
          <ButtonText onClick={handleDelete} style={{ color: 'rgb(204, 204, 204)' }}>
            DELETE COURSE
          </ButtonText>
        </Container>
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = ({ view }) => ({
  open: view.showEditCourseModal,
});

export default connect(
  mapStateToProps,
  { toggleEditCourseModal },
)(EditCourseModal);
