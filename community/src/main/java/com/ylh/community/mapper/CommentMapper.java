package com.ylh.community.mapper;

import com.ylh.community.entity.Comment;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommentMapper {

    List<Comment> selectCommentsByEntity(int entityType, int entityId, int offset, int limit);

    Comment selectCommentById(int id);

    int selectCountByEntity(int entityType, int entityId);

    int insertComment(Comment comment);


}
