import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CommentItem = styled.li`
  margin-bottom: 10px;
`;

const CommentForm = styled.form`
  margin-top: 20px;
`;

const CommentInput = styled.textarea`
  width: calc(100% - 20px);
  padding: 10px;
  font-size: 16px;
  border: 1px solid greenyellow;
  border-radius: 4px;
  resize: vertical;
  &:focus-visible {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: greenyellow;
  color: black;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ListContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-bottom: 5px dotted greenyellow;
`;

const ListItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 5px 9px rgba(0, 255, 42, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  transition: transform 0.3s ease;
  border-bottom: 1px solid greenyellow;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ListItemTitle = styled.h3`
  color: #333;
  font-size: 20px;
  margin-bottom: 10px;
`;

const ListItemDescription = styled.p`
  color: #666;
  font-size: 16px;
`;
const All = styled("div")`
  height: auto;
  width: 100%;
  margin-top: 20px;
`;
const Star = styled("img")`
  height: 20px;
`;

function Comment() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <All>
      <Title>Izohlar</Title>
      <ListContainer>
        <ListItem>
          <ListItemTitle>Iskandarov Firdavs</ListItemTitle>
          <Star
            src="https://static.vecteezy.com/system/resources/previews/013/743/771/original/five-stars-rating-icon-png.png"
            alt=""
          />
          <ListItemDescription>
            Ajoyib xizmat Men Get Transfer xizmatidan ko'p marta foydalanganman
            va hech qachon muammoga duch kelmaganman. Eng yaxshi narxlarni
            tavsiya eting va bron qilish juda oson .
          </ListItemDescription>
        </ListItem>
        <ListItem>
          <ListItemTitle>Berdiyeva Gulmira</ListItemTitle>
          <Star
            src="https://www.jigsawhealth.com/cdn/shop/t/14/assets/icon-4.4-stars_2x.png?48429"
            alt=""
          />
          <ListItemDescription>
            Xaqlni xizmatini qilib charchamanglar , oila a'zolarim bilan
            Namanganga birinchi marta borib , yaxshi dam oldik .
          </ListItemDescription>
        </ListItem>
        <ListItem>
          <ListItemTitle>Toirov Moxammadjon</ListItemTitle>
          <Star
            src="https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png"
            alt=""
          />
          <ListItemDescription>
            Rafiqam Lola bilan Sirdaryodagi to'g'ri terminalda uchrashganingiz
            uchun katta rahmat, juda minnatdorman .
          </ListItemDescription>
        </ListItem>
        <ListItem>
          <ListItemTitle>Qurbonov Azizbek</ListItemTitle>
          <Star
            src="https://www.jigsawhealth.com/cdn/shop/t/14/assets/icon-4.4-stars_2x.png?48429"
            alt=""
          />
          <ListItemDescription>
            Men bu xizmatdan xursand xafa bo'lolmasdim. Katta qiymat va
            haydovchi o'smir yigitlarimizga juda yaxshi qaradi. Juda yoqimli
            odam va men juda minnatdorman .
          </ListItemDescription>
        </ListItem>
        <ListItem>
          <ListItemTitle>Berdiyeva Guzal</ListItemTitle>
          <Star
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/3.5_stars.svg/1280px-3.5_stars.svg.png"
            alt=""
          />
          <ListItemDescription>
            Zo'r haydovchi, bu juda muhim. Bu kompaniyani albatta tavsiya
            qilaman.
          </ListItemDescription>
        </ListItem>
        <ListItem>
          <ListItemTitle>Erkinov Lazizbek</ListItemTitle>
          <Star
            src="https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-four-4-star-rank-sign-vector-illustration-eps10-png-image_5621249.png"
            alt=""
          />
          <ListItemDescription>
            BesTTransfer ajoyib ekan , kursdoshlar bilan yaxshi hordiq
            chiqardik.
          </ListItemDescription>
        </ListItem>
      </ListContainer>
      <Container>
        <Title>Sizning izohingiz</Title>
        <CommentList>
          {comments.map((comment, index) => (
            <CommentItem key={index}>{comment}</CommentItem>
          ))}
        </CommentList>
        <CommentForm onSubmit={handleSubmit}>
          <CommentInput
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Izoh yozib qoldiring..."
            rows={4}
          />
          <br />
          <SubmitButton type="submit">Izoh qo'shmoq</SubmitButton>
        </CommentForm>
      </Container>
      <div style={{ height: "100px" }}></div>
    </All>
  );
}

export default Comment;
